import { Fragment, useEffect } from 'react';
import ErrorPlaceholder from '../../components/ErrorPlaceholder';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useAsync } from '../../hooks/useAsync';
import { getMenu } from '../../services/menu';
import { ItemData, MenuResponse } from '../../services/menu/interface';
import {
  ItemSeparator,
  Title,
  FoodCard,
  FoodName,
  FoodImage,
  VerticalFlatlist,
  HorizontalFlatlist,
} from './styles';

export default function HomeScreen() {
  const { data, isError, isLoading, isRefreshing, run } = useAsync<MenuResponse>();

  useEffect(() => {
    run(getMenu());
  }, [run]);

  if (isError) {
    return <ErrorPlaceholder onPressReload={() => run(getMenu())} />;
  }

  if (isLoading || !data) {
    return <LoadingIndicator.Full />;
  }

  const renderItemData = (item: ItemData) => (
    <FoodCard>
      <FoodImage source={{ uri: item.url }} />
      <FoodName>{item.name}</FoodName>
    </FoodCard>
  );

  return (
    <VerticalFlatlist
      onRefresh={() => run(getMenu())}
      refreshing={isRefreshing}
      data={data.menus}
      keyExtractor={menuData => menuData.name}
      renderItem={({ item: menuData }) => (
        <>
          <Title>{menuData.name}</Title>
          <HorizontalFlatlist
            horizontal
            showsHorizontalScrollIndicator={false}
            data={menuData.items}
            keyExtractor={item => item.name}
            renderItem={({ item }) => renderItemData(item)}
            ItemSeparatorComponent={ItemSeparator}
          />
        </>
      )}
    />
  );
}
