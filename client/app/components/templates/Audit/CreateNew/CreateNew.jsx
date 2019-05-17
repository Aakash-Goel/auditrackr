import React, { Fragment } from 'react';
import { object } from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputAdornment } from '@material-ui/core';
import {
  PersonOutlined,
  EmailOutlined,
  LockOutlined,
} from '@material-ui/icons';

import {
  Breadcrumbs,
  ContentContainer,
  GridContainer,
  GridItem,
  Input,
  Button,
} from 'app-components';

import createNewAuditStyles from './CreateNew.style';

const propTypes = {
  classes: object.isRequired,
};

const CreateNewAuditComponent = props => {
  const { classes } = props;

  return (
    <Fragment>
      <Breadcrumbs titleBreadcrumb="Start New Audit" />
      <ContentContainer>
        <GridContainer
          className={classnames(classes.container)}
          alignItems="center"
          justify="center"
        >
          <GridItem xs={12} sm={12} md={8} lg={6} xl={4}>
            <Typography
              variant="h5"
              component="p"
              className={classnames(classes.info)}
            >
              Start creating an audit to add pace to your business, don&#39;t
              let a messy audit be your fate.
            </Typography>
            <div className={classnames(classes.formWrapper)}>
              <form noValidate autoComplete="off">
                <div className={classnames(classes.inputWrapper)}>
                  <Input
                    labelText="Enter an audit name"
                    formControlProps={{
                      required: true,
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end" color="primary">
                          <PersonOutlined className={classes.icon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classnames(classes.inputWrapper)}>
                  <Input
                    labelText="Enter the project name"
                    formControlProps={{
                      required: true,
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end" color="primary">
                          <EmailOutlined className={classes.icon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className={classnames(classes.inputWrapper)}>
                  <Input
                    labelText="Enter the project id"
                    formControlProps={{
                      required: true,
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'password',
                      endAdornment: (
                        <InputAdornment position="end" color="primary">
                          <LockOutlined className={classes.icon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {/* <div className={classnames(classes.inputWrapper)}>
                      Select a category
                    </div> */}
                <div className={classnames(classes.buttonsWrapper)}>
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    className={classnames(classes.btnSubmit)}
                  >
                    Start new audit
                  </Button>
                </div>
              </form>
            </div>
          </GridItem>
        </GridContainer>
      </ContentContainer>
    </Fragment>
  );
};

CreateNewAuditComponent.propTypes = propTypes;

export default withStyles(createNewAuditStyles)(CreateNewAuditComponent);
