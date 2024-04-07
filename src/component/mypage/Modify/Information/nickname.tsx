import * as React from 'react';
import styled from 'styled-components';

interface   NewPasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewNicknameInput: React.FC<NewPasswordInputProps> = ({ value, onChange }) => {
    return (
        <Wrapper>
            <NewNicknameTitle>닉네임 변경</NewNicknameTitle>
            <Input
                type="text"
                value={value}
                onChange={onChange}
            />
        </Wrapper>
    );
};

const Wrapper = styled.li`
    list-style: none;
    padding-bottom: 73px;
`;

const NewNicknameTitle = styled.span`

font-size: 20px;
font-weight: 500;


`;

const Input = styled.input`
 margin-left:36px;
 padding:10px 60px;
`;

export default NewNicknameInput;