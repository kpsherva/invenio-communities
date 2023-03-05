// This file is part of InvenioRDM
// Copyright (C) 2022 CERN.
//
// Invenio App RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { i18next } from "@translations/invenio_app_rdm/i18next";
import React from "react";
import { Image } from "react-invenio-forms";
import { Button, Icon, Item, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

export const CommunityItemMobile = ({ result, index }) => {
  const communityType = result.ui?.type?.title_l10n;
  const visibility = result.access.visibility;
  const isPublic = visibility === "public";
  return (
    <Item key={index} className="mobile only community-item">
      <Item.Content className="centered">
        <Item.Extra className="user-communities">
          {communityType && (
            <Label size="tiny" className="primary">
              <Icon name="tag" />
              {communityType}
            </Label>
          )}
          {!isPublic && (
            <Label size="tiny" className="negative">
              <Icon name="ban" />
              "restricted"
            </Label>
          )}
        </Item.Extra>
        <Item.Extra>
          <Image wrapped src={result.links.logo} size="small" />
        </Item.Extra>
        <Item.Header as="h2" className="rel-mt-1">
          <a href={`/communities/${result.slug}`}>{result.metadata.title}</a>
        </Item.Header>
        <Item.Meta>
          <div
            className="truncate-lines-2"
            dangerouslySetInnerHTML={{
              __html: result.metadata.description,
            }}
          />
        </Item.Meta>
        <Item>
          {result.metadata.website && (
            <a href={result.metadata.website} target="_blank" rel="noopener noreferrer">
              {result.metadata.website}
            </a>
          )}
        </Item>
        <Item.Extra>
          {i18next.t("Created: ")}
          {DateTime.fromISO(result.created).toLocaleString(i18next.language)}
        </Item.Extra>
        {result.ui.permissions.can_update && (
          <Item.Extra>
            <Button
              compact
              size="small"
              fluid
              href={`/communities/${result.id}/settings`}
              labelPosition="left"
              icon="edit"
              content={i18next.t("Edit")}
            />
          </Item.Extra>
        )}
      </Item.Content>
    </Item>
  );
};

CommunityItemMobile.propTypes = {
  result: PropTypes.object.isRequired,
  index: PropTypes.string,
};

CommunityItemMobile.defaultProps = {
  index: null,
};