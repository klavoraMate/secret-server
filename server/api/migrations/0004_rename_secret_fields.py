from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_secret_secrettext'),
    ]

    operations = [
        migrations.RenameField(
            model_name='secret',
            old_name='secretText',
            new_name='secret_text',
        ),
        migrations.RenameField(
            model_name='secret',
            old_name='createdAt',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='secret',
            old_name='expiresAt',
            new_name='expires_at',
        ),
        migrations.RenameField(
            model_name='secret',
            old_name='remainingViews',
            new_name='remaining_views',
        ),
    ]
