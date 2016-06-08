/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';
import * as $ from 'jquery';

export interface HiProps { compiler: string; framework: string;
}
//'http://*/'
export class Hi extends React.Component<HiProps, {}> {
  public componentDidMount() {

  }

  public render() {
    return (
      <div className='content'>
        <h3 className='panel'>hi!</h3>
        <ul>
          <img src="http://cdn.shopify.com/s/files/1/0860/3518/products/rightmeow_comp.jpg?v=1432861786" alt=""/>
          <li>{this.props.compiler}</li>
          <li>{this.props.framework}</li>
        </ul>
      </div>
    );
  }
}
