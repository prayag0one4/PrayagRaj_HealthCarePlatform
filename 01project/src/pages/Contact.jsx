// import React, { useState } from 'react';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Loader2 } from 'lucide-react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [status, setStatus] = useState({
//     submitting: false,
//     error: null,
//     success: false
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, error: null, success: false });

//     try {
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//         signal: controller.signal
//       });

//       clearTimeout(timeoutId);

//       if (!response.ok) {
//         let errorMessage;
//         try {
//           const errorData = await response.json();
//           errorMessage = errorData.message;
//         } catch {
//           errorMessage = `Server error: ${response.status} ${response.statusText}`;
//         }
//         throw new Error(errorMessage);
//       }

//       const data = await response.json();
//       setStatus({
//         submitting: false,
//         error: null,
//         success: true
//       });
//       setFormData({ name: '', email: '', message: '' });
      
//     } catch (error) {
//       let errorMessage = 'Failed to send message. Please try again later.';
      
//       if (error.name === 'AbortError') {
//         errorMessage = 'Request timed out. Please check your connection and try again.';
//       } else if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
//         errorMessage = 'Unable to connect to the server. Please check your connection.';
//       } else if (error.message) {
//         errorMessage = error.message;
//       }

//       setStatus({
//         submitting: false,
//         error: errorMessage,
//         success: false
//       });
//     }
//   };

//   const handleChange = (e) => {
//     setStatus({ ...status, error: null, success: false });
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="px-4 mx-auto max-w-3xl">
//         <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
//         <p className="mb-8 text-center text-gray-600">
//           Got a technical issue? Want to send feedback? Let us know.
//         </p>

//         {status.error && (
//           <Alert variant="destructive" className="mb-6">
//             <AlertTitle>Error</AlertTitle>
//             <AlertDescription>{status.error}</AlertDescription>
//           </Alert>
//         )}

//         {status.success && (
//           <Alert className="mb-6">
//             <AlertTitle>Success</AlertTitle>
//             <AlertDescription>
//               Message sent successfully! Check your email for confirmation.
//             </AlertDescription>
//           </Alert>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Name
//             </label>
//             <Input
//               type="text"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Email
//             </label>
//             <Input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="example@gmail.com"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Message
//             </label>
//             <Textarea
//               id="message"
//               rows={6}
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Leave a comment or message"
//               required
//             />
//           </div>

//           <Button
//             type="submit"
//             disabled={status.submitting}
//             className="w-full"
//           >
//             {status.submitting ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Sending...
//               </>
//             ) : (
//               'Send Message'
//             )}
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setState] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setState({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section className="py-12">
      <div className="px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="mb-8 text-center text-gray-600">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let us know how we can help you"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a comment"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;