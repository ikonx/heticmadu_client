import React, { useState } from 'react';
import PageHeader from '../molecules/PageHeader/PageHeader';
import { ScrollableContent } from '../../utils/styles/Globals';
import InputText from '../atoms/Inputs/Text/InputText';
import styled from 'styled-components';
import BtnBlue from '../atoms/Buttons/BtnBlue';
import TagsBlock from '../molecules/TagsBlock';
import { DataTags } from 'utils/Tags/Tags';
import { TagModel } from 'utils/models/tag.model';
interface Props {}

const StyledScrollableContent = styled(ScrollableContent)`
  margin-top: 2rem;
  width: 50%;
`;

const TagsInput = styled.div`
  display: flex;
  align-items: flex-end;
  button {
    margin-left: 1rem;
  }
`;

const Tags: React.FC<Props> = () => {
  const [value, setvalue] = useState<string>('');
  const [tags, setTags] = useState<TagModel[]>(DataTags);

  const onAddTag = () => {
    /**
     * TODO: Creer un formulaire
     * TODO: Requette AJAX => method POST
     *
     */

    if (value === '' || value === null) {
      return;
    }

    setTags([...tags, { id: 0, tag: value }]);
    setvalue('');
  };

  const handdleChange = (_fieldKey: string, _fieldValue: any) => {
    setvalue(_fieldValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddTag();
    }
  };

  const deleteTags = (index: number) => (e: MouseEvent) => {
    const filteredTags = tags.filter((tag, i) => i !== index);
    setTags(filteredTags);
  };

  return (
    <>
      <PageHeader title="Gérer les tags" subtitle="tags" />
      <StyledScrollableContent>
        <TagsInput>
          <InputText
            title="Tags"
            placeholder="Rentrez les tags"
            fieldKey="tags"
            fieldValue={value}
            onChange={handdleChange}
            onKeyDown={handleKeyDown}
          />
          <BtnBlue text="Valider" onClick={onAddTag} />
        </TagsInput>
        <TagsBlock tags={tags} deleteFN={deleteTags} />
      </StyledScrollableContent>
    </>
  );
};

export default Tags;
