import React, { useState, useEffect } from 'react';
import PoisContext from './pois.context';
import { PoiModel } from 'utils/models/pois.model';
import { getPois } from 'utils/http';

interface Props {}

const defaultPois: PoiModel[] = [];

const PoisProvider: React.FC<Props> = ({ children }) => {
  const [pois, setPois] = useState<PoiModel[]>(defaultPois);
  const [fetchingPois, setFetchingPois] = useState<boolean>(false);

  useEffect(() => {
    setFetchingPois(true);
    // getPois().then((res: any) => {
    //   if (res.status === 200) {
    //     setPois(res.data);
    //     setFetchingPois(false);
    //   }
    // });
    // setFetchingPois(false);
    setTimeout(() => {
      setPois([
        {
          id: 1,
          category: 'resto',
          averagePrice: '€',
          tags: [
            { id: 1, tag: 'africa' },
            { id: 2, tag: 'bar' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez kader',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.354768,
          latitude: 48.860589,
        },
        {
          id: 2,
          category: 'shop',
          averagePrice: '€€€',
          tags: [{ id: 1, tag: 'africa' }],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.332595,
          latitude: 48.864371,
        },
        {
          id: 3,
          category: 'business',
          averagePrice: '€€',
          tags: [
            { id: 5, tag: 'burger' },
            { id: 2, tag: 'bar' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.292952,
          latitude: 48.87102,
        },
        {
          id: 4,
          category: 'shop',
          averagePrice: '€',
          tags: [
            { id: 5, tag: 'burger' },
            { id: 6, tag: 'vegan' },
            { id: 4, tag: 'cosy' },
            { id: 7, tag: 'sushi' },
            { id: 8, tag: 'indien' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.397322,
          latitude: 48.87102,
        },
        {
          id: 5,
          category: 'resto',
          averagePrice: '€€',
          tags: [{ id: 2, tag: 'bar' }],
          images: [
            'https://source.unsplash.com/300x400/?food,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.402886,
          latitude: 48.859557,
        },
        {
          id: 6,
          category: 'shop',
          averagePrice: '€€€',
          tags: [
            { id: 1, tag: 'africa' },
            { id: 2, tag: 'bar' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.369143,
          latitude: 48.853161,
        },
        {
          id: 7,
          category: 'resto',
          averagePrice: '€',
          tags: [
            { id: 1, tag: 'africa' },
            { id: 2, tag: 'bar' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?green,vegan',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.324768,
          latitude: 48.680589,
        },
        {
          id: 8,
          category: 'shop',
          averagePrice: '€€€',
          tags: [
            { id: 3, tag: 'salade' },
            { id: 4, tag: 'cosy' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.322595,
          latitude: 48.764371,
        },
        {
          id: 9,
          category: 'business',
          averagePrice: '€€',
          tags: [
            { id: 5, tag: 'burger' },
            { id: 2, tag: 'bar' },
            { id: 3, tag: 'salade' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.292952,
          latitude: 48.83102,
        },
        {
          id: 10,
          category: 'shop',
          averagePrice: '€€€',
          tags: [{ id: 5, tag: 'burger' }],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.391322,
          latitude: 48.87802,
        },
        {
          id: 11,
          category: 'business',
          averagePrice: '€€€',
          tags: [
            { id: 2, tag: 'bar' },
            { id: 7, tag: 'sushi' },
            { id: 4, tag: 'cosy' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.412886,
          latitude: 48.849557,
        },
        {
          id: 12,
          category: 'business',
          averagePrice: '€€',
          tags: [
            { id: 1, tag: 'africa' },
            { id: 2, tag: 'bar' },
          ],
          images: [
            'https://source.unsplash.com/300x400/?food,gree,vegan,bio',
            'https://source.unsplash.com/1600x900/?food',
            'https://source.unsplash.com/1600x900/?food,snack,fastfood',
          ],
          name: 'Chez vico',
          address: '12 rue test',
          greenScore: 8.6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut nisl tristique dignissim tellus malesuada enim, pharetra.',
          longitude: 2.329143,
          latitude: 48.859161,
        },
      ]);
      setFetchingPois(false);
    }, 3000);
  }, []);

  const refreshPois = () => getPois().then((res: any) => {
    if (res.status === 200) {
      setPois(res.data);
      setFetchingPois(false);
    }
    return res
  });

  return (
    <PoisContext.Provider value={{ pois, setPois, fetchingPois, refreshPois }}>
      {children}
    </PoisContext.Provider>
  );
};

export default PoisProvider;
