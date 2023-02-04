import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfo = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 5px 5px 20px 5px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #979797;
  box-shadow: 0 2px 4px #cecccc;
`;

export const PosterWrapper = styled.div`
  display: block;
  min-width: 350px;
`;

export const Poster = styled.img`
  border-radius: 10px;
`;

export const MovieInfoText = styled.div`
  padding: 20px;
  background-color: #f0efef;
  border-radius: 10px;
`;

export const MovieTitle = styled.h2`
  font-size: 28px;
  padding-bottom: 30px;
`;

export const InfoTitles = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  padding-bottom: 30px;
`;

export const ReviewsTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 0;
`;

export const ReviewsText = styled.h2`
  text-align: center;
  font-size: 16px;
`;

export const AdditWrapper = styled.div`
  border-bottom: 1px solid #979797;
  box-shadow: 0 2px 4px #cecccc;
  padding-top: 20px;
`;

export const AdditInfo = styled.p`
  font-size: 16px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

export const AdditList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  border-bottom: 1px solid #979797;
  box-shadow: 0 2px 4px #cecccc;
  padding-bottom: 20px;
`;

export const AdditListItem = styled.li`
  padding-left: 20px;
  font-size: 16px;
`;

export const LinkItem = styled(Link)`
  font-size: 16px;
`;
