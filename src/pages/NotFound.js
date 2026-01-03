import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 max-w-xl mb-8">
        This page does not exist. The link may be broken or the page was moved.
      </p>
      <Link to="/">
        <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonShape="btn--round">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
