import React, { useEffect, useState } from 'react';
import config from '../../settings/config.json';

import {
  UserInfoContainer,
  FlexContainer,
  StyledHeader,
  StyledList,
  StyledKey
} from './styles';
import { rem } from '../../utils/helper';
import { useParams } from 'react-router-dom';
import './transision.css';
import Axios from 'axios';

const betterName = name => name.split('_').join(' ');

const getUsername = ({ first_name, last_name }) =>
  `${first_name[0]}${last_name}`.toLowerCase();

export default function({ className }) {
  const { name } = useParams();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    samaccountname: '',
    description: '',
    email: ''
  });

  useEffect(() => {
    Axios.get(`${config['api-entry-url']}/ldap/get`).then(({ data }) => {
      const providedUser = data.filter(u => {
        const { first_name, last_name } = u;
        if (name.indexOf(first_name) > -1 && name.indexOf(last_name) > -1) {
          return true;
        }
        return false;
      })[0];
      setUser(providedUser);
    });
  }, [name]);

  return (
    <UserInfoContainer className={className}>
      <FlexContainer>
        <FlexContainer
          direction={'column'}
          grow={2}
          space="start"
          style={{ padding: '0 30px 0 5px' }}
        >
          <StyledHeader>{betterName(name)}</StyledHeader>
          <div>
            <StyledList>
              <li>
                <FlexContainer>
                  <StyledKey>Nutername:</StyledKey>
                  <span>@{getUsername(user)}</span>
                </FlexContainer>
              </li>
              <li>
                <FlexContainer>
                  <StyledKey>E-mail:</StyledKey>
                  <span>{user.email}</span>
                </FlexContainer>
              </li>
              <li>
                <FlexContainer>
                  <StyledKey>Rolle:</StyledKey>
                  <span>{user.description}</span>
                </FlexContainer>
              </li>
            </StyledList>
          </div>
        </FlexContainer>
        <div>
          <img
            style={{ height: rem(200) }}
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
        </div>
      </FlexContainer>
    </UserInfoContainer>
  );
}
