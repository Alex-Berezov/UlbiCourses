import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import Text from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/Button'
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const readOnly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdditing())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {readOnly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINED}
          onClick={onEdit}
        >
          {t('editProfile')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINED_RED}
            onClick={onCancelEdit}
          >
            {t('CancelEditProfile')}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINED}
            onClick={onSave}
          >
            {t('SaveProfile')}
          </Button>
        </>
      )}
    </div>
  )
}

export default ProfilePageHeader
