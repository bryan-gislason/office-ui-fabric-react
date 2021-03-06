import * as React from 'react';
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';
import './SearchBox.Small.Example.scss';

export class SearchBoxSmallExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='ms-SearchBoxSmallExample'>
        <SearchBox
          onEscape={ (ev) => {
            console.log('Custom onEscape Called');
          } }
          onClear={ (ev) => {
            console.log('Custom onClear Called');
          } }
          onChange={ (newValue) => console.log('SearchBox onChange fired: ' + newValue) }
          onSearch={ (newValue) => console.log('SearchBox onSearch fired: ' + newValue) }
          onFocus={ () => console.log('onFocus called') }
          onBlur={ () => console.log('onBlur called') }
        />
      </div>
    );
  }

}
