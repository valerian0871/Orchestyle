import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Button from '../components/common/Button'

function Account() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    if (!user) return null;

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="container-luxury section-padding min-h-[70vh]">
            <div className="flex flex-col md:flex-row gap-12">
                
                {/* Sidebar */}
                <div className="w-full md:w-64">
                    <h2 className="text-2xl font-bold mb-8 text-[#222]">My Account</h2>
                    <ul className="space-y-4 text-[14px]">
                        <li><button className="font-bold hover:underline w-full text-left">Overview</button></li>
                        <li><button className="text-[#666] hover:underline hover:text-[#222] w-full text-left">My Orders</button></li>
                        <li><button className="text-[#666] hover:underline hover:text-[#222] w-full text-left">My Details</button></li>
                        <li><button className="text-[#666] hover:underline hover:text-[#222] w-full text-left">Address Book</button></li>
                        <li className="pt-4 border-t border-[#e4e4e4]">
                            <button onClick={handleLogout} className="text-[#666] hover:text-hm-red transition-colors text-left w-full">Sign Out</button>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="bg-[#f8f8f8] p-8 mb-8">
                        <h3 className="text-xl font-bold mb-2 text-[#222]">Welcome back, {user.name || 'Member'}!</h3>
                        <p className="text-[#666] text-[14px]">Member since {new Date().getFullYear()}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-[16px] mb-4 text-[#222]">Recent Orders</h4>
                            <div className="border border-[#e4e4e4] p-6 text-center text-[#666] text-[13px]">
                                You have no recent orders.
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-[16px] mb-4 text-[#222]">My Details</h4>
                            <div className="border border-[#e4e4e4] p-6 text-[14px] text-[#222]">
                                <p className="mb-2"><strong>Name:</strong> {user.name}</p>
                                <p className="mb-4"><strong>Email:</strong> {user.email}</p>
                                <Button variant="outline" size="sm" className="px-4 py-2 text-[12px]">Edit Details</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Account
