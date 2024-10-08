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


import * as runtime from '../runtime';
import type {
  CreateUserRequest,
  User,
} from '../models/index';
import {
    CreateUserRequestFromJSON,
    CreateUserRequestToJSON,
    UserFromJSON,
    UserToJSON,
} from '../models/index';

export interface CreateUsersRequest {
    createUserRequest: CreateUserRequest;
}

export interface GetUserByIdRequest {
    userId: string;
}

export interface GetUsersRequest {
    limit?: number;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Create a user
     */
    async createUsersRaw(requestParameters: CreateUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['createUserRequest'] == null) {
            throw new runtime.RequiredError(
                'createUserRequest',
                'Required parameter "createUserRequest" was null or undefined when calling createUsers().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserRequestToJSON(requestParameters['createUserRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a user
     */
    async createUsers(requestParameters: CreateUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createUsersRaw(requestParameters, initOverrides);
    }

    /**
     * Info for a specific users
     */
    async getUserByIdRaw(requestParameters: GetUserByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUserById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Info for a specific users
     */
    async getUserById(requestParameters: GetUserByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all users
     */
    async getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * List all users
     */
    async getUsers(requestParameters: GetUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
