import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/config';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // The backend only has a login route right now
      // This makes a POST request to the API server running on 5000
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Logged in successfully!');
        // Save token and user info
        localStorage.setItem('token', data.token);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          if (data.user.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/student');
          }
        } else {
          navigate('/admin');
        }
      } else {
        toast.error(data.message || data.error || 'Authentication failed. Please try again.');
      }
    } catch (error) {
      toast.error('Could not connect to the server. Is it running?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl tracking-widest mb-2 text-foreground">
            NERDY<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-sm tracking-wider uppercase">
            {isLogin ? 'Welcome Back' : 'Join the Academy'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username" 
              type="text" 
              required
              className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary h-12"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {isLogin && (
                <a href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <Input 
              id="password" 
              type="password" 
              required
              className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary h-12"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest clip-skew-sm"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline focus:outline-none"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
          <a href="/" className="inline-block mt-6 text-xs text-white/50 hover:text-white tracking-widest uppercase transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
