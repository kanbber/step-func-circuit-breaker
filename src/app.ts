import { join } from 'path';
import { AuthorizationType, FieldLogLevel, GraphqlApi, Schema } from '@aws-cdk/aws-appsync-alpha';
import {
  Stack,
  StackProps,
  // aws_appsync as appsync,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new GraphqlApi(this, 'api', {
      name: 'CDPAdminSyncApi',
      logConfig: {
        fieldLogLevel: FieldLogLevel.ALL,
      },
      schema: Schema.fromAsset(join(__dirname, 'schema.graphql')),
    });

    // const apiDomain = new appsync.CfnDomainName(this, 'DomainName', {
    //   certificateArn: props.certificateArn,
    //   domainName,
    // });

    // new appsync.CfnDomainNameApiAssociation(this, 'DomainNameAssociation', {
    //   domainName: apiDomain.attrDomainName,
    //   apiId: api.apiId,
    // });

    // new route53.CnameRecord(this, 'CName', {
    //   recordName: 'api',
    //   domainName: apiDomain.attrAppSyncDomainName,
    //   zone,
    // });
  }
}
