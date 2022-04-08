import { Fragment, useEffect } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import ErrorPlaceholder from '../../components/ErrorPlaceholder';
import LoadingIndicator from '../../components/HeaderLogo/LoadingIndicator';
import { useAsync } from '../../hooks/useAsync';
import { getMenu } from '../../services/menu';
import { ItemData, MenuResponse } from '../../services/menu/interface';
import theme from '../../theme';

const Text = styled.Text({
  color: theme.colors.primaryDefault,
  fontFamily: theme.fontFamily.interRegular,
  fontSize: theme.fontSizes.titleXLarge,
  lineHeight: theme.lineHeights.titleXLarge,
});

export default function HomeScreen() {
  const { data, isError, isLoading, run } = useAsync<MenuResponse>();

  useEffect(() => {
    run(getMenu());
  }, [run]);

  if (isLoading || !data) {
    return <LoadingIndicator.Full />;
  }

  if (isError) {
    return <ErrorPlaceholder onPressReload={() => run(getMenu())} />;
  }

  const renderItem = (item: ItemData) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView>
      {data.menus.map(menu => (
        <Fragment key={menu.name}>
          <Text>{menu.name}</Text>
          <FlatList
            horizontal
            data={menu.items}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={item => item.name}
          />
        </Fragment>
      ))}
    </ScrollView>
  );
}
