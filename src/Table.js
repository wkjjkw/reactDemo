import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
                {/*<thead>*/}
                {/*<tr>*/}
                    {/*<th>Name</th>*/}
                    {/*<th>Job</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                    {/*<td>Charlie</td>*/}
                    {/*<td>Janitor</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                    {/*<td>Mac</td>*/}
                    {/*<td>Bouncer</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                    {/*<td>Dee</td>*/}
                    {/*<td>Aspiring actress</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                    {/*<td>Dennis</td>*/}
                    {/*<td>Bartender</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
            </table>
        );
    }
}

export default Table;
