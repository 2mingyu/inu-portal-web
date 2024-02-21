import React from 'react';
import styled from 'styled-components';

interface   CurrentPasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CurrentpasswordInput: React.FC<CurrentPasswordInputProps> = ({ value, onChange }) => {
    return (
        <Wrapper>
            <CurrentPasswordTitle>현재 비밀번호</CurrentPasswordTitle>
            <Input
                type="password"
                value={value}
                onChange={onChange}
            />
        </Wrapper>
    );
};

const Wrapper = styled.li`
    list-style: none;
    padding-bottom: 55px;
    
`;

const CurrentPasswordTitle = styled.span`
    /* 원하는 스타일링을 여기에 추가하세요 */
`;

const Input = styled.input`
    margin-left:36px;
    padding:10px 60px;
`;

export default CurrentpasswordInput;