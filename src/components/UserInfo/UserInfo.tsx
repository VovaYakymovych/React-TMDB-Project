import "./UserInfo.css";

type UserInfoProps = {
    name: string;
};

const UserInfo = ({ name }: UserInfoProps) => {
    return (
        <div className="user-info">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="user-icon"
            >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="user-name">{name}</span>
        </div>
    );
};

export default UserInfo;
