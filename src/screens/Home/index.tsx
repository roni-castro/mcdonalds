import { useEffect, useState } from 'react';
import ErrorPlaceholder from '../../components/ErrorPlaceholder';
import ModalBottom from '../../components/ModalBottom';
import LoadingIndicator from '../../components/LoadingIndicator';
import FoodDetail from './components/FoodDetail';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  useEffect(() => {
    run(getMenu());
  }, [run]);

  if (isError) {
    return <ErrorPlaceholder onPressReload={() => run(getMenu())} />;
  }

  if (isLoading || !data) {
    return <LoadingIndicator.Full />;
  }

  const toogleModal = () => setIsModalVisible(curState => !curState);

  const handleItemPress = (item: ItemData) => {
    setSelectedItem(item);
    toogleModal();
  };

  const renderItemData = (item: ItemData) => (
    <FoodCard onPress={() => handleItemPress(item)}>
      <FoodImage source={{ uri: item.url }} />
      <FoodName>{item.name}</FoodName>
    </FoodCard>
  );

  return (
    <>
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
      {selectedItem && (
        <ModalBottom isVisible={isModalVisible} onCloseOrDismissModal={toogleModal}>
          <FoodDetail
            imageUrl={selectedItem.url}
            name={selectedItem.name}
            description={selectedItem.description}
            price={selectedItem.price}
          />
        </ModalBottom>
      )}
    </>
  );
}
