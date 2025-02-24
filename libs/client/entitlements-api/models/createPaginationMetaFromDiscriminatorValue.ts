import {PaginationMeta} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPaginationMetaFromDiscriminatorValue(parseNode: ParseNode | undefined) : PaginationMeta {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PaginationMeta();
}
