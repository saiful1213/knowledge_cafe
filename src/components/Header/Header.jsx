import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex items-center justify-between border-b pb-4">
            <h1 className='text-4xl text-center font-bold '>Knowledge Cafe</h1>
            <Avatar>
                <AvatarImage src={profile} />
                <AvatarFallback>
                    Profile
                </AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Header;