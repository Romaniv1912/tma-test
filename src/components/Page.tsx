import { useNavigate } from 'react-router-dom';
import { backButton } from '@tma.js/sdk-react';
import { type PropsWithChildren, useEffect } from 'react';

export function Page({ children, back = true }: PropsWithChildren<{
  /**
   * True if it is allowed to go back from this page.
   */
  back?: boolean
}>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      void backButton.show();
      return backButton.onClick(() => {
        void navigate(-1);
      });
    }
    void backButton.hide();
  }, [back]);

  return <>{children}</>;
}
