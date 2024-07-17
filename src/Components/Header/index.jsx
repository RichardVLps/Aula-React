import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style"
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import defaultAvatar from "../../assets/default_avatar.svg";


export function Header() {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar;

    const handleLogout = () => {
        signOut();
        navigate('/');
    };

    return (
        <Container>
            <Profile onClick={() => navigate('/profile')}>
                <img src={avatarURL} alt="Imagem de Richard" />
                <span>Bem vindo, <br/> <strong>{user.name}</strong></span>
            </Profile>
            <Logout onClick={handleLogout}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}