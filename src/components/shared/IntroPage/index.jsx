import React from 'react';
import { Text, View } from 'react-native';

import { useTranslation } from 'react-i18next';

import I18n from '@src/i18n';

import styles from './styles';

export default function IntroPageComponent(props: ComponentProps) {
  const { platform } = props;
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        {I18n.t('intro-message')}
      </Text>

      <Text style={styles.platformText}>
        {platform}
      </Text>
    </View>
  );
}

interface ComponentProps {
  platform: String;
}
