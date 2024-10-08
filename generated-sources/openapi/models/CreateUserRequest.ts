/* tslint:disable */
/* eslint-disable */
/**
 * Generator example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    email: string;
}

/**
 * Check if a given object implements the CreateUserRequest interface.
 */
export function instanceOfCreateUserRequest(value: object): value is CreateUserRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function CreateUserRequestFromJSON(json: any): CreateUserRequest {
    return CreateUserRequestFromJSONTyped(json, false);
}

export function CreateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'email': json['email'],
    };
}

export function CreateUserRequestToJSON(value?: CreateUserRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'email': value['email'],
    };
}

