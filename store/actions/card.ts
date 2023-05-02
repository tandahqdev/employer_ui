import { CardBrand, CardType } from 'models';
import { useCardStore } from '../state';

export class CardChangeHandler {
  static onTypeChange = (type: CardType) => {
    useCardStore.setState((state) => ({
      type: state.type === type ? undefined : type,
    }));
  };

  static onBrandChange = (brand: CardBrand) => {
    useCardStore.setState((state) => ({
      brand: state.brand === brand ? undefined : brand,
    }));
  };

  static onNameChange = (name: string) => {
    useCardStore.setState(() => ({
      name,
    }));
  };

  static onAmountChange = (amount: number) => {
    useCardStore.setState(() => ({
      amount,
    }));
  };

  static onAccountChange = (account: string) => {
    useCardStore.setState(() => ({
      account,
    }));
  };

  static onCurrencyChange = (currency: string) => {
    useCardStore.setState(() => ({
      currency,
    }));
  };

  //   Address
  static onStreetChange = (street: string) => {
    useCardStore.setState((state) => ({
      address: { ...state.address, street },
    }));
  };

  static onSuiteChange = (suite: string) => {
    useCardStore.setState((state) => ({
      address: { ...state.address, suite },
    }));
  };

  static onCityChange = (city: string) => {
    useCardStore.setState((state) => ({
      address: { ...state.address, city },
    }));
  };

  static onStateChange = (val: string) => {
    useCardStore.setState((state) => ({
      address: { ...state.address, state: val },
    }));
  };

  static onPostalChange = (postalCode: string) => {
    useCardStore.setState((state) => ({
      address: { ...state.address, postalCode },
    }));
  };

  static onCountryChange = (country: string) => {
    useCardStore.setState((state) => ({
      address: { ...state.address, country },
    }));
  };
}
