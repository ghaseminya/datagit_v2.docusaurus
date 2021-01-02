/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';

function BlogListPaginator(props) {
  const {
    metadata
  } = props;
  const {
    previousPage,
    nextPage
  } = metadata;
  return <nav className="pagination-nav" aria-label="Blog list page navigation">
      <div className="pagination-nav__item pagination-nav__item--next">
        {nextPage && <Link className="pagination-nav__link" to={nextPage}>
            <div className="pagination-nav__label">&laquo; مطالب قدیمی تر</div>
          </Link>}
      </div>
      <div className="pagination-nav__item">
        {previousPage && <Link className="pagination-nav__link" to={previousPage}>
            <div className="pagination-nav__label">مطالب جدید تر &raquo;</div>
          </Link>}
      </div>
    </nav>;
}

export default BlogListPaginator;