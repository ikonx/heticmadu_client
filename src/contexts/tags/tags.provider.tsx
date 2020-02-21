import React, { useState, useEffect } from 'react';
import TagsContext from './tags.context';
import { getTags } from 'utils/http';
import { TagModel } from 'utils/models/tag.model';

interface Props {}

const defaultTags: TagModel[] = [];

const TagsProvider: React.FC<Props> = ({ children }) => {
  const [tags, setTags] = useState<TagModel[]>(defaultTags);
  const [fetchingTags, setFetchingTags] = useState<boolean>(false);

  useEffect(() => {
    setFetchingTags(true);
    getTags().then((res: any) => {
      if (res.status === 200) {
        setTags(res.data);
        setFetchingTags(false);
      }
    });
    setFetchingTags(false);
  }, []);

  const refreshTags = () => getTags().then((res: any) => {
    if (res.status === 200) {
      setTags(res.data);
      setFetchingTags(false);
    }
    return res
  });

  const addTags = () => {
    
  }

  return (
    <TagsContext.Provider value={{ tags, setTags, fetchingTags, refreshTags }}>
      {children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
