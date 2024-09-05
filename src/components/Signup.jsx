import React,{useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth'
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { login } from '../store/authSlice'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error,setError] = useState('')
    const {register,handleSubmit} = useForm()

    const create = async (data)=>{
        setError('')
        try {
            const userData = authService.createAccount(data)
            if(userData){
                const userData = authService.getCurrentUser()
                if(userData) dispatch(login(data));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                Sign In
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(create)}>
                <div className="space-y-5">
                    <Input 
                        label="Full Name:"
                        placeholder="Enter yout Full Name"
                        {...register("name",{
                            required:true,
                        })}
                    />
                    <Input
                    label='Email: '
                    placeholder="Enter your email"
                    type="email"
                    {...register("email" , {
                        required:true,
                        validate:{
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    <Input 
                    label="Password"
                    placeholder = "Enter your password"
                    type="password"
                    {...register("password",{
                        required:true,
                        // validate:{
                        //     matchPatern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ||
                        //     " at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
                        // }
                    })}
                    />
                    <Button type="submit" className="w-full">Create Account</Button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Signup