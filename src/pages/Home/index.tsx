import { Link } from 'react-router-dom';
import { UserProps } from '../../@types/user';
import * as S from './style';

interface HomeProps{
    user: UserProps,
}

export const Home = ({user}: HomeProps) => {
    return(
        <S.Wrapper>
            <S.Container>
                <S.Aside>
                    <S.Profilmage >
                        <img
                            src={user.avatar_url}
                            alt={user.name}
                        />
                    </S.Profilmage>

                    <S.ProfileInfos>
                        <p className='infos'> {user.username} </p>
                        <p className='name'> {user.name} </p>
                        <div className='wrapperConnections'>
                            <Link to="/followers" className='linkConnections'><span>{user.followers}</span> followers </Link>
                            <Link to="/followers" className='linkConnections'><span>{user.following}</span> following</Link>
                        </div>
                        <p className='infos'> {user.bio} </p>
                        <p className='infos'> {user.location} </p>
                        <Link to={user.repos_url || "/"} className='infos'> Repos {user.public_repos} </Link>
                        <Link to={user.blog || "/"} className='infos'> Blog </Link>
                        <Link to="/" className='infos'> {user.twitter} </Link>
                    </S.ProfileInfos>
                </S.Aside>

                <S.Content>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    )
}