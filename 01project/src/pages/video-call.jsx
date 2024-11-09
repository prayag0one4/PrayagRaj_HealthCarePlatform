// src/components/VideoCall.js

import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Peer from 'peerjs';

const VideoCall = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const peerId = location.state?.peerId;

  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerInstance = useRef();

  useEffect(() => {
    if (!peerId) {
      alert("No peer ID provided! Redirecting to booking page.");
      navigate("/");
      return;
    }

    peerInstance.current = new Peer(peerId);

    peerInstance.current.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        setLocalStream(stream);
        call.answer(stream);
        call.on('stream', (remoteStream) => {
          setRemoteStream(remoteStream);
        });
      });
    });

    return () => {
      peerInstance.current.destroy();
      if (localStream) localStream.getTracks().forEach(track => track.stop());
    };
  }, [peerId, localStream, navigate]);

  const callPeer = (remotePeerId) => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      setLocalStream(stream);
      const call = peerInstance.current.call(remotePeerId, stream);
      call.on('stream', (remoteStream) => {
        setRemoteStream(remoteStream);
      });
    });
  };

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [localStream, remoteStream]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Video Consultation</h2>
        
        {/* Video containers */}
        <div className="flex justify-around items-center mb-6">
          {/* Local video */}
          <div className="flex flex-col items-center">
          <p className="text-lg text-gray-500 mb-2">Your Video</p>
          <video ref={localVideoRef} autoPlay muted className="w-60 h-60 bg-gray-200 rounded-lg shadow-md"></video>
          </div>

          {/* Remote video */}
          <div className="flex flex-col items-center">
          <p className="text-lg text-gray-500 mb-2">Consultant's Video</p>
          <video ref={remoteVideoRef} autoPlay className="w-60 h-60 bg-gray-200 rounded-lg shadow-md"></video>
        </div>
    </div>

        <input
          type="text"
          value={remotePeerIdValue}
          onChange={(e) => setRemotePeerIdValue(e.target.value)}
          placeholder="Enter remote peer ID"
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <button
          onClick={() => callPeer(remotePeerIdValue)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Start Call
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
