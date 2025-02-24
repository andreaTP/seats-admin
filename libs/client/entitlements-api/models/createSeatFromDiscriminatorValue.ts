import {Seat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSeatFromDiscriminatorValue(parseNode: ParseNode | undefined) : Seat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Seat();
}
