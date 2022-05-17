import { mergeResolvers } from '@graphql-tools/merge';

import { default as rootResolvers } from './root';
import { default as loggableEventResolvers } from './LoggableEvent';
import { default as userResolvers } from './User';

export default mergeResolvers([rootResolvers, loggableEventResolvers, userResolvers]);
