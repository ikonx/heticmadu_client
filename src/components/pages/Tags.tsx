import React, { useState, useContext, useEffect } from 'react';
import PageHeader from '../molecules/PageHeader/PageHeader';
import { ScrollableContent } from '../../utils/styles/Globals';
import InputText from '../atoms/Inputs/Text/InputText';
import styled from 'styled-components';
import BtnBlue from '../atoms/Buttons/BtnBlue';
import TagsBlock from '../molecules/TagsBlock';
import { DataTags } from 'utils/Tags/Tags';
import { TagModel } from 'utils/models/tag.model';
import TagsContext from 'contexts/tags/tags.context';
import { postTags } from 'utils/http';
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
  const tagsCointext = useContext(TagsContext);

  const [value, setValue] = useState<string>('');
  const [tags, setTags] = useState<TagModel[]>([]);

  useEffect(() => {
    setTags(tagsCointext.tags);
  }, [tagsCointext.tags]);

  const onAddTag = () => {
    if (value === '' || value === null) {
      return;
    }

    if (tags.filter(filter => filter.tag === value).length !== 0) {
      return;
    } else {
      postTags({ tag: value }).then((res: any) => {
        tagsCointext.refreshTags();
      });
    }

    setTags([...tags, { tag: value }]);
    setValue('');
  };

  const handdleChange = (_fieldKey: string, _fieldValue: any) => {
    setValue(_fieldValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddTag();
    }
  };

  const deleteTags = (index: number) => (e: MouseEvent) => {
    const filteredTags = tags.filter((tag: any, i: number) => i !== index);
    const tagToDelete: TagModel = tags[index];
    setTags(filteredTags);
    tagToDelete.id && tagsCointext.deleteTag(tagToDelete.id);
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
