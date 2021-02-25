import React, {createContext, useContext} from 'react';
import {ApiGetPartners, Partner} from '../../types';
import {getRequest} from '../../utils/apiAdapter';
import {isString} from '../../utils/type-guards';

export const SubmitContext = createContext({
  range: 0,
  setRange: (range: number) => {},
  getData: (range?: number) => {},
  rangeHasError: false,
  setRangeHasError: (hasError: boolean) => {},
  partners: [],
  areAll: true,
  serverTextError: '',
});

export default function useSubmit() {
  const context = useContext(SubmitContext);
  return context;
}

export const SubmitProvider = (props: {children: React.ReactNode}) => {
  const [range, setRange] = React.useState(0);
  const [rangeHasError, setRangeHasError] = React.useState(false);
  const [serverTextError, setServerTextError] = React.useState('');
  const [areAll, setAreAll] = React.useState(true);
  const [partners, setPartners] = React.useState<Partner[]>([]);
  React.useEffect(() => {
    getData();
  }, []);

  const {children} = props;
  async function getData(range?: number) {
    if (rangeHasError) {
      return 'ERROR';
    }
    const data = await getRequest<ApiGetPartners>(
      `/partners`,
      range ? {range} : undefined,
    );
    if (isString(data)) {
      setServerTextError(data);
      return 'ERROR';
    } else {
      setPartners(data.partners);
      setAreAll(data.areAll);
      return data;
    }
  }
  return (
    <SubmitContext.Provider
      value={{
        range,
        setRange,
        getData,
        rangeHasError,
        setRangeHasError,
        //@ts-ignore
        partners,
        serverTextError,
        areAll,
      }}>
      {children}
    </SubmitContext.Provider>
  );
};
