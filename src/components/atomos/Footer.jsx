import styled from "styled-components";
import { FiHeart, FiGithub } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterContent>
                <Copyright>
                    Made with <HeartIcon><FiHeart /></HeartIcon> by ferjbadev © {currentYear}
                </Copyright>
                <Links>
                    <Link href="https://github.com/ferjbadev" target="_blank" rel="noopener noreferrer">
                        <FiGithub size={18} />
                        GitHub
                    </Link>
                </Links>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    margin-top: 60px;
    padding: 24px;
    border-top: 1px solid ${props => props.theme.bg4};
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
`;

const Copyright = styled.p`
    margin: 0;
    color: ${props => props.theme.colorSubtitle};
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const HeartIcon = styled.span`
    color: #FF6B6B;
    display: inline-flex;
    animation: heartbeat 1.5s ease-in-out infinite;

    @keyframes heartbeat {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;

const Links = styled.div`
    display: flex;
    gap: 16px;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;

    &:hover {
        color: #00F34A;
        transform: translateY(-2px);
    }
`;
