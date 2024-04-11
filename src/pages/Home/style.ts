import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px 16px;
    background: #262223;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    gap: 16px;
    width: 100%;
    max-width: 1140px;
    height: 100%;
    margin: 0 auto;
`;

export const Aside = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 32px 16px;
`;

export const Profilmage = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 32px;

    img{
        width: 100%;
        object-fit: cover;
    }
`;

export const ProfileInfos = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    .name,
    .infos,
    .linkConnections{
        color: #fff;
    }

    .wrapperConnections{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 12px;
        margin-bottom: 10px;

        .linkConnections{
            font-weight: 300;

            span{
                font-weight: 500;
            }
        }
    }

    .name{
        font-size: 28px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    width: 100%;
    background: rgba(0, 0, 0, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 32px 16px;
`;