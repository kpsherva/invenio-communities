# -*- coding: utf-8 -*-
#
# Copyright (C) 2022 CERN.
#
# Invenio-Communities is free software; you can redistribute it and/or modify
# it under the terms of the MIT License; see LICENSE file for more details.

"""Facets for the members search."""

from flask_babelex import gettext as _
from invenio_records_resources.services.records.facets import TermsFacet

from ...proxies import current_roles

role = TermsFacet(
    field='role',
    label=_("Role"),
    value_labels=lambda keys: {k: current_roles[k].title for k in keys},
)

visibility = TermsFacet(
    field='visible',
    label=_('Visibility'),
    value_labels={"true": _("Public"), "false": _("Hidden")}
)