// app/(auth)/signup/page.tsx

"use client"; // Ensure this is at the top

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '@/contex/AuthContext'; // Corrected import path
import { useRouter } from 'next/navigation'; // For newer Next.js versions

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useAuth();
  const router = useRouter(); // Ensure router is used here

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signUp(email, password);
      router.push('/coinpage'); // Redirect to homepage or another protected page after successful sign-up
    } catch (error) {
      setError('Failed to sign up. Please check your credentials.');
    }
  };

  return (
    <div className="w-[350px] mt-20 flex flex-col items-center mx-auto px-4 py-10 border-2 shadow-xl rounded-2xl">
      <h2 className="text-3xl pb-6 text-bold">Sign up</h2>
      <form className="flex flex-col w-full space-y-4 mb-9" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label htmlFor="password">Password</label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="w-full">Sign up</Button>
      </form>
      <div className="mt-6 flex flex-col items-center space-x-2">
        <p>Already have an account?</p>
        <Link className="text-blue-500 hover:underline" href="/signin">Sign in</Link>
      </div>
    </div>
  );
};

export default SignUp;
