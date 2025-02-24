import {createDependencyErrorResponse_errorFromDiscriminatorValue} from './createDependencyErrorResponse_errorFromDiscriminatorValue';
import {DependencyErrorResponse_error} from './index';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DependencyErrorResponse extends ApiError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The error property */
    private _errorEscaped?: DependencyErrorResponse_error | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new DependencyErrorResponse and sets the default values.
     */
    public constructor() {
        super();
        this._additionalData = {};
    };
    /**
     * Gets the error property value. The error property
     * @returns a DependencyErrorResponse_error
     */
    public get errorEscaped() {
        return this._errorEscaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the errorEscaped property.
     */
    public set errorEscaped(value: DependencyErrorResponse_error | undefined) {
        this._errorEscaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.errorEscaped = n.getObjectValue<DependencyErrorResponse_error>(createDependencyErrorResponse_errorFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DependencyErrorResponse_error>("error", this.errorEscaped);
        writer.writeAdditionalData(this.additionalData);
    };
}
