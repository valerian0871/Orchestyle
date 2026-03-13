import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

function Signup() {
    const { register } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        
        // Mock API Call
        setTimeout(() => {
            register(name, email, password)
            setLoading(false)
            navigate('/account')
        }, 800)
    }

    return (
        <div className="container-luxury section-padding flex justify-center items-center min-h-[70vh]">
            <div className="w-full max-w-md p-8 bg-white border border-[#e4e4e4]">
                <h1 className="text-2xl font-bold mb-2 text-center text-[#222]">Become a member</h1>
                <p className="text-center text-[13px] text-[#666] mb-6">Create your profile and get 10% off your first purchase.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input 
                        label="Full Name" 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <Input 
                        label="Email Address" 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <Input 
                        label="Password" 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button type="submit" className="w-full py-3 mt-4" isLoading={loading}>
                        Join Now
                    </Button>
                </form>
                
                <div className="mt-8 text-center text-[13px]">
                    <span className="text-[#666]">Already a member?</span>{' '}
                    <Link to="/login" className="font-bold underline text-[#222]">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
