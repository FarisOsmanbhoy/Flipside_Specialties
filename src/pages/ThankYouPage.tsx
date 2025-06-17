import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fadeIn">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold text-slate-900">
          Thanks for reaching out!
        </h1>
        <p className="text-lg text-slate-600">
          We've received your message and will be in touch within 1 business day.
        </p>
        <Button
          onClick={() => navigate('/')}
          size="lg"
          className="mt-8"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;