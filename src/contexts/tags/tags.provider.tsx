import React, { useState, useEffect, useContext } from 'react';
import TagsContext from './tags.context';
import { getTags, deleteTag as deleteTagAPI } from 'utils/http';
import { TagModel } from 'utils/models/tag.model';
import UserContext from 'contexts/user/user.context';

interface Props {}

const defaultTags: TagModel[] = [];

const TagsProvider: React.FC<Props> = ({ children }) => {
  const [tags, setTags] = useState<TagModel[]>(defaultTags);
  const [fetchingTags, setFetchingTags] = useState<boolean>(false);
  const { isLogin } = useContext(UserContext);

  useEffect(() => {
    if (isLogin) {
      setFetchingTags(true);
      getTags().then((res: any) => {
        if (res.status === 200) {
          setTags(res.data);
          setFetchingTags(false);
        }
      });
      setFetchingTags(false);
    }
  }, []);

  const refreshTags = () =>
    getTags().then((res: any) => {
      if (res.status === 200) {
        setTags(res.data);
        setFetchingTags(false);
      }
      return res;
    });

  const deleteTag = (_id: string | number) => {
    setFetchingTags(true);
    deleteTagAPI(_id).then((res: any) => {
      if (res.status === 200) {
        refreshTags();
        setFetchingTags(false);
      }
      return res;
    });
  };

  return (
    <TagsContext.Provider
      value={{ tags, setTags, fetchingTags, refreshTags, deleteTag }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
