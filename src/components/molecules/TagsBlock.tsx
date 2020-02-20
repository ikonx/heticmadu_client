import React from 'react';
import styled from "styled-components";
import { Colors, Fonts } from "../../utils/styles";
import TagsHighlighted from "../atoms/TagsHighlighted";

interface Props {
}

const TagsContainer = styled.div`
  background: ${Colors.white};
  border-radius: 4px;
  text-align: left;
  margin-top: 24px;
`;

const TagsHeader = styled.div`
  font-family: ${Fonts.bold};
  font-size: 14px;
  border-bottom: 1px solid ${Colors.lightGrey};
  padding: 1rem;
  p {
    margin: 0;
  }
`;

const TagsBody = styled.div`
  height: 200px;
  padding: 1rem;
`;

const TagsBlock: React.FC<Props> = () => {
  return (
    <TagsContainer>
      <TagsHeader>
        <p>Tags</p>
      </TagsHeader>
      <TagsBody>
        <TagsHighlighted text="JunkFood" clickListener={() => console.log('CLICK TAG')}/>
      </TagsBody>
    </TagsContainer>
  );
};

export default TagsBlock;
