import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
];

export default function Socials({ containerstyles, iconstyles }) {
    return(
        <div className={containerstyles}>
            {socials.map((item,index) => {
                return(
                    <Link key={index} href={item.path} className={iconstyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};
