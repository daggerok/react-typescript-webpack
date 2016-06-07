/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';

export interface HiProps { compiler: string; framework: string; }

export class Hi extends React.Component<HiProps, {}> {
  public render() {
    return (
      <div>
        <h3 className="panel">hi!</h3>
      </div>
    );
  }
}
