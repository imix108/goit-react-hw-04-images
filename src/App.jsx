import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Button } from './components/Button/Button';
import { fetchImages } from './services/api';
import { STATUSES } from './utils/constants';
import { Loader } from './components/Loader/Loader';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

   const onSubmit = e => {
    e.preventDefault();
    const newSearchText = e.currentTarget.elements.searchText.value.trim();
    
    if (!newSearchText) {
      return;
    }

      setSearchText(newSearchText);
      setData(null);
      setPage(1);
      setHasMounted(true)
  }


  const getImages = async (searchText, page) => {
    try {
      setStatus(STATUSES.pending);
      const fetchedData = await fetchImages(searchText, page);
      setStatus(STATUSES.success);
      setLoadMore(page < Math.ceil(fetchedData.totalHits / 12));
      return fetchedData;
    } catch (error) {
      setError(error.message);
      setStatus(STATUSES.error);
    }
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

    useEffect(() => {
    if (hasMounted) {
      getImages(searchText, page).then(fetchData => {
      setData(prevData => prevData ? [...prevData, ...fetchData.hits] : fetchData.hits )
    })
    }
  }, [page, searchText, hasMounted])

    return (
      <div>
        {error && <p>{ error}</p>}
        <SearchBar onSubmit={onSubmit}/>
        <ImageGallery data={data}></ImageGallery>
        {data && loadMore && <Button onLoadMore={onLoadMore}></Button>}
        {status === STATUSES.pending && <Loader></Loader>}
      </div>
    );
};


