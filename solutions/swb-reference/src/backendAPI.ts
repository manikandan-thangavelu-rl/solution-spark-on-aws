/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { Express } from 'express';
import { generateRouter, ApiRouteConfig } from '@amzn/swb-app';
import SagemakerEnvironmentLifecycleService from './environment/sagemaker/sagemakerEnvironmentLifecycleService';
import SagemakerEnvironmentConnectionService from './environment/sagemaker/sagemakerEnvironmentConnectionService';

const apiRouteConfig: ApiRouteConfig = {
  routes: [
    {
      path: '/foo',
      serviceAction: 'launch',
      httpMethod: 'post',
      service: new SagemakerEnvironmentLifecycleService()
    }
  ],
  environments: {
    sagemaker: {
      lifecycle: new SagemakerEnvironmentLifecycleService(),
      connection: new SagemakerEnvironmentConnectionService()
    }
  }
};

const backendAPIApp: Express = generateRouter(apiRouteConfig);

export default backendAPIApp;