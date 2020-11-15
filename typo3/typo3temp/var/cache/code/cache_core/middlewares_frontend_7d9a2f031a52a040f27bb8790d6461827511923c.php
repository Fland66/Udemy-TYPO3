<?php
return array (
  'typo3/cms-frontend/output-compression' => 'TYPO3\\CMS\\Frontend\\Middleware\\OutputCompression',
  'typo3/cms-adminpanel/data-persister' => 'TYPO3\\CMS\\Adminpanel\\Middleware\\AdminPanelDataPersister',
  'typo3/cms-adminpanel/renderer' => 'TYPO3\\CMS\\Adminpanel\\Middleware\\AdminPanelRenderer',
  'typo3/cms-frontend/content-length-headers' => 'TYPO3\\CMS\\Frontend\\Middleware\\ContentLengthResponseHeader',
  'typo3/cms-frontend/shortcut-and-mountpoint-redirect' => 'TYPO3\\CMS\\Frontend\\Middleware\\ShortcutAndMountPointRedirect',
  'typo3/cms-frontend/prepare-tsfe-rendering' => 'TYPO3\\CMS\\Frontend\\Middleware\\PrepareTypoScriptFrontendRendering',
  'typo3/cms-frontend/page-argument-validator' => 'TYPO3\\CMS\\Frontend\\Middleware\\PageArgumentValidator',
  'typo3/cms-frontend/maintenance-mode' => 'TYPO3\\CMS\\Frontend\\Middleware\\MaintenanceMode',
  'typo3/cms-frontend/page-resolver' => 'TYPO3\\CMS\\Frontend\\Middleware\\PageResolver',
  'typo3/cms-frontend/preview-simulator' => 'TYPO3\\CMS\\Frontend\\Middleware\\PreviewSimulator',
  'typo3/cms-redirects/redirecthandler' => 'TYPO3\\CMS\\Redirects\\Http\\Middleware\\RedirectHandler',
  'typo3/cms-frontend/static-route-resolver' => 'TYPO3\\CMS\\Frontend\\Middleware\\StaticRouteResolver',
  'typo3/cms-frontend/base-redirect-resolver' => 'TYPO3\\CMS\\Frontend\\Middleware\\SiteBaseRedirectResolver',
  'typo3/cms-adminpanel/initiator' => 'TYPO3\\CMS\\Adminpanel\\Middleware\\AdminPanelInitiator',
  'typo3/cms-frontend/site' => 'TYPO3\\CMS\\Frontend\\Middleware\\SiteResolver',
  'typo3/cms-adminpanel/sql-logging' => 'TYPO3\\CMS\\Adminpanel\\Middleware\\SqlLogging',
  'typo3/cms-frontend/backend-user-authentication' => 'TYPO3\\CMS\\Frontend\\Middleware\\BackendUserAuthenticator',
  'typo3/cms-frontend/authentication' => 'TYPO3\\CMS\\Frontend\\Middleware\\FrontendUserAuthenticator',
  'typo3/cms-frontend/tsfe' => 'TYPO3\\CMS\\Frontend\\Middleware\\TypoScriptFrontendInitialization',
  'typo3/cms-frontend/eid' => 'TYPO3\\CMS\\Frontend\\Middleware\\EidHandler',
  'typo3/cms-frontend/preprocessing' => 'TYPO3\\CMS\\Frontend\\Middleware\\PreprocessRequestHook',
  'typo3/cms-core/normalized-params-attribute' => 'TYPO3\\CMS\\Core\\Middleware\\NormalizedParamsAttribute',
  'typo3/cms-frontend/timetracker' => 'TYPO3\\CMS\\Frontend\\Middleware\\TimeTrackerInitialization',
);
#