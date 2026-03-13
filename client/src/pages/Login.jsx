import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        
        // Mock API Call
        setTimeout(() => {
            login(email, password)
            setLoading(false)
            navigate('/account')
        }, 800)
    }

    return (
        <div className="container-luxury section-padding flex justify-center items-center min-h-[70vh]">
            <div className="w-full max-w-md p-8 bg-white border border-[#e4e4e4]">
                <h1 className="text-2xl font-bold mb-6 text-center text-[#222]">Sign In</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input 
                        label="Email Address" 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <div className="space-y-1">
                        <Input 
                            label="Password" 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="text-right">
                            <Link className="text-[12px] text-[#666] hover:underline">Forgot password?</Link>
                        </div>
                    </div>
                    
                    <Button type="submit" className="w-full py-3" isLoading={loading}>
                        Sign In
                    </Button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-[#e4e4e4] text-center">
                    <p className="text-[13px] text-[#666] mb-4">Don't have an account yet?</p>
                    <Link to="/signup">
                        <Button variant="outline" className="w-full border border-[#222]">
                            Become a member
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
